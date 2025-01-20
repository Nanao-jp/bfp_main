import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // 環境変数のログ
    const envVars = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      admin: process.env.ADMIN_EMAIL
    };
    console.log('環境変数:', envVars);

    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP設定が不完全です。環境変数を確認してください。');
    }

    // メール送信の設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1'
      },
      debug: true
    });

    // SMTP接続テスト
    try {
      console.log('SMTP接続テスト開始');
      console.log('認証情報:', {
        user: process.env.SMTP_USER,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT
      });
      await transporter.verify();
      console.log('SMTP接続成功');
    } catch (error) {
      console.error('SMTP接続エラー:', error);
      throw new Error(`SMTP接続エラー: ${(error as Error).message}`);
    }

    // メール送信処理を1通ずつ実行
    try {
      // 管理者向けメール
      console.log('管理者向けメール送信開始');
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: process.env.ADMIN_EMAIL,
        subject: `【お問い合わせ】${subject}`,
        text: `
お名前: ${name}
メールアドレス: ${email}
お問い合わせ種別: ${subject}

お問い合わせ内容:
${message}
        `,
      });
      console.log('管理者向けメール送信成功');

      // 自動返信メール
      console.log('自動返信メール送信開始');
      await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to: email,
        subject: '【自動返信】お問い合わせを受け付けました',
        text: `
${name} 様

この度は、ビッグファイタープロジェクトへお問い合わせいただき、ありがとうございます。
以下の内容でお問い合わせを受け付けました。

お問い合わせ種別: ${subject}

お問い合わせ内容:
${message}

内容を確認の上、担当者より折り返しご連絡させていただきます。
しばらくお待ちくださいますようお願い申し上げます。

※このメールは自動送信されています。
このメールに返信いただいても回答できない場合がございます。

--
株式会社ビッグファイタープロジェクト
〒171-0014
東京都豊島区池袋3-36-3　MICCビル1F
TEL：03-6912-5467
FAX：03-6912-5468
        `,
      });
      console.log('自動返信メール送信成功');
    } catch (error) {
      console.error('メール送信エラー:', error);
      throw error;
    }

    return NextResponse.json({ message: 'メールを送信しました。' });
  } catch (error) {
    console.error('エラーの詳細:', error);
    return NextResponse.json(
      { error: `メールの送信に失敗しました: ${(error as Error).message}` },
      { status: 500 }
    );
  }
} 