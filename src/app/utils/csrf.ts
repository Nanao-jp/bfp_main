import { randomBytes, createHash } from 'crypto';

// CSRFトークンの生成
export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex');
}

// CSRFトークンの検証
export function validateCSRFToken(token: string, storedToken: string): boolean {
  if (!token || !storedToken) return false;
  
  // タイミング攻撃を防ぐために一定時間の比較を行う
  const valid = createHash('sha256')
    .update(token)
    .digest('hex') === createHash('sha256')
    .update(storedToken)
    .digest('hex');

  return valid;
}

// CSRFトークンをセッションに保存
export function setCSRFToken(token: string): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('csrf-token', token);
  }
}

// CSRFトークンをセッションから取得
export function getStoredCSRFToken(): string | null {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('csrf-token');
  }
  return null;
} 