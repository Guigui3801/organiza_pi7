
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  authoraized: boolean;
  deleted: boolean;
  active: boolean;
  admin: boolean;
  avatar: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export { User };
