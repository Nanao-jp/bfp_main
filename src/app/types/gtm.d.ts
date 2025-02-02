// GTMのデータレイヤー型定義
interface DataLayerObject {
  'gtm.start'?: number;
  event?: string;
  consent?: 'granted' | 'denied';
  page_type?: string;
  page_path?: string;
  user_consent?: boolean;
  ga_measurement_id?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer: DataLayerObject[];
    gtag: (command: string, ...args: unknown[]) => void;
  }
}

export {}; 