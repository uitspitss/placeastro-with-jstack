import { signIn, signOut, useSession } from '@/lib/auth-client';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Lock, LogOut, Mail } from 'lucide-react';
import { type FormEvent, useState } from 'react';

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const navigate = useNavigate();
  const { data: session } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await signIn.email(formData, {
        onRequest: () => {},
        onSuccess: () => {
          navigate({ to: '/upload' });
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      });
    } catch (_error) {
      setSubmitError('Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      setSubmitError('');

      await signOut({
        fetchOptions: {
          onRequest: () => {},
          onSuccess: () => {
            navigate({ to: '/login' });
          },
          onError: (ctx) => {
            alert(ctx.error.message);
          },
        },
      });
    } catch (_error) {
      setSubmitError('Failed to sign out');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        {session ? (
          <div className="code-card flex flex-col items-center gap-6 rounded-xl px-8 py-10">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-secondary">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                Signed in as{' '}
                <span className="font-medium text-foreground">
                  {session.user?.email}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border/50 bg-secondary px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/80 cursor-pointer"
              disabled={isSubmitting}
            >
              <LogOut className="h-3.5 w-3.5" />
              {isSubmitting ? 'Signing out...' : 'Sign out'}
            </button>
          </div>
        ) : (
          <div className="code-card rounded-xl px-8 py-10">
            <div className="mb-8 flex flex-col gap-2">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold italic tracking-tight">
                Sign in
              </h2>
              <p className="text-sm text-muted-foreground">
                Access image upload and management
              </p>
            </div>

            {submitError && (
              <div className="mb-4 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2">
                <p className="text-sm text-destructive">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-secondary py-2.5 pl-10 pr-4 text-sm transition-colors placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/25"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
