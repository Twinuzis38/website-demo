export interface NavItem {
  label: string;
  path?: string;
  subItems?: NavItem[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum PageTheme {
  CYAN = 'cyan',
  GREEN = 'green',
  WHITE = 'white'
}
