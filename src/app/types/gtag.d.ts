interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: {
      page_path?: string;
      cookie_flags?: string;
      [key: string]: string | number | boolean | undefined;
    }
  ) => void;
  dataLayer: Record<string, string | number | boolean>[];
} 