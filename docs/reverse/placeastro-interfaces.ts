// ======================
// PlaceAstro 型定義集約（逆生成）
// ======================

// ======================
// エンティティ型定義
// ======================

/** 天体画像エンティティ */
export interface PlaceImage {
  id: string;
  url: string;
  credits: string;
  sourceUrl: string;
  catalogue: 'M' | 'NGC';
  catalogueNumber: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

/** ユーザーエンティティ */
export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: number;
  updatedAt: number;
}

/** セッションエンティティ */
export interface Session {
  id: string;
  expiresAt: number;
  token: string;
  createdAt: number;
  updatedAt: number;
  ipAddress?: string | null;
  userAgent?: string | null;
  userId: string;
}

/** アカウントエンティティ */
export interface Account {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  accessToken?: string | null;
  refreshToken?: string | null;
  idToken?: string | null;
  accessTokenExpiresAt?: number | null;
  refreshTokenExpiresAt?: number | null;
  scope?: string | null;
  password?: string | null;
  createdAt: number;
  updatedAt: number;
}

/** 認証トークンエンティティ */
export interface Verification {
  id: string;
  identifier: string;
  value: string;
  expiresAt: number;
  createdAt?: number | null;
  updatedAt?: number | null;
}

// ======================
// API型定義
// ======================

/** 画像作成リクエスト */
export interface CreatePlaceImageRequest {
  catalogue: 'M' | 'NGC';
  catalogueNumber: string;
  credits: string;
  sourceUrl: string;
  url: string;
}

/** アップロードURL取得リクエスト */
export interface GetUploadUrlRequest {
  key: string;
}

/** アップロードURL取得レスポンス */
export interface GetUploadUrlResponse {
  uploadUrl: string;
  imgixUrl: string;
}

/** 画像検索リクエスト */
export interface GetImageByKeyRequest {
  key: string;
}

/** API成功レスポンス */
export interface ApiSuccessResponse<T = any> {
  success: true;
  data: T;
}

/** APIエラーレスポンス */
export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    details?: any;
  };
}

/** API共通レスポンス型 */
export type ApiResponse<T = any> = ApiSuccessResponse<T> | ApiErrorResponse;

// ======================
// コンポーネントProps型
// ======================

/** ギャラリーコンポーネントProps */
export interface GalleryProps {
  imageUrls: string[];
}

/** 画像コンポーネントProps */
export interface PlaceImageProps {
  image: PlaceImage;
  onCopy?: (url: string) => void;
}

/** 画像アップロードフォームProps */
export interface PlaceImageUploadFormProps {
  onUploadSuccess?: (image: PlaceImage) => void;
  onUploadError?: (error: string) => void;
}

/** コピートゥクリップボードProps */
export interface CopyToClipboardProps {
  text: string;
  children: React.ReactNode;
}

/** ボタンProps（shadcn/ui） */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

/** ツールチップProps */
export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

// ======================
// 状態管理型
// ======================

/** 認証状態 */
export interface AuthState {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

/** アップロード状態 */
export interface UploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
}

// ======================
// クエリ・ミューテーション型
// ======================

/** クエリキー型 */
export interface QueryKeys {
  placeImages: () => ['placeImages'];
  placeImagesByKey: (key: string) => ['placeImages', 'byKey', string];
  placeImagesList: () => ['placeImages', 'list'];
  placeImagesHealth: () => ['placeImages', 'health'];
}

/** ミューテーションキー型 */
export interface MutationKeys {
  placeImagesCreate: () => ['placeImages', 'create'];
  placeImagesGetUploadUrl: () => ['placeImages', 'getUploadUrl'];
}

// ======================
// 環境・設定型
// ======================

/** Cloudflare Workers環境変数 */
export interface WorkerEnv {
  IMGIX_HOSTNAME: string;
  R2_BUCKET: string;
  DATABASE: D1Database;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  ALLOW_SIGNUP?: string;
}

/** サーバーコンテキスト */
export interface ServerContext {
  db: any; // Drizzle Database instance
  env: WorkerEnv;
}

/** クライアント設定 */
export interface ClientConfig {
  apiBaseUrl: string;
  defaultQueryOptions: {
    staleTime: number;
    cacheTime: number;
  };
}

// ======================
// ユーティリティ型
// ======================

/** 天体カタログ */
export type Catalogue = 'M' | 'NGC';

/** タイムスタンプ */
export interface Timestamps {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

/** ページネーション */
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

/** ソート設定 */
export interface SortConfig {
  field: keyof PlaceImage;
  direction: 'asc' | 'desc';
}

/** フィルター設定 */
export interface FilterConfig {
  catalogue?: Catalogue;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}

// ======================
// フォーム型
// ======================

/** 画像作成フォーム */
export interface PlaceImageFormData {
  catalogue: Catalogue;
  catalogueNumber: string;
  credits: string;
  sourceUrl: string;
  files: FileList;
}

/** ログインフォーム */
export interface LoginFormData {
  email: string;
  password: string;
}

/** サインアップフォーム */
export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// ======================
// イベント型
// ======================

/** ファイルアップロードイベント */
export interface FileUploadEvent {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
}

/** 画像クリックイベント */
export interface ImageClickEvent {
  image: PlaceImage;
  action: 'view' | 'copy' | 'download';
}

// ======================
// 外部ライブラリ型拡張
// ======================

/** Next.js ページProps */
export interface NextPageProps<T = {}> {
  params: T;
  searchParams: { [key: string]: string | string[] | undefined };
}

/** Hono Context拡張 */
declare module 'hono' {
  interface Context {
    get db(): any;
    get user(): User | null;
    get session(): Session | null;
  }
}

// ======================
// 型ガード関数
// ======================

/** API成功レスポンスの型ガード */
export function isApiSuccessResponse<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return response.success === true;
}

/** APIエラーレスポンスの型ガード */
export function isApiErrorResponse(
  response: ApiResponse
): response is ApiErrorResponse {
  return response.success === false;
}

/** 有効なカタログの型ガード */
export function isValidCatalogue(value: string): value is Catalogue {
  return value === 'M' || value === 'NGC';
}

// ======================
// 型変換ユーティリティ
// ======================

/** データベースエンティティからAPIレスポンスへの変換 */
export type DbToApi<T> = Omit<T, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

/** APIリクエストからデータベース挿入用への変換 */
export type ApiToDb<T> = T & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

// ======================
// エクスポート用型エイリアス
// ======================

export type {
  PlaceImage as Image,
  CreatePlaceImageRequest as CreateImageRequest,
  GetUploadUrlResponse as UploadUrlResponse,
  Catalogue as ImageCatalogue,
  WorkerEnv as Environment
};