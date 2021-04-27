export interface Feeds {
  photo: string;
  message: string;
  video: string;
  user: Contacts | null;
  id: number;
  time: number | string;
}

export interface Contacts {
  name: string;
  avatar: string;
  id: number;
  status: string;
  lastlogin?: string | number;
}
