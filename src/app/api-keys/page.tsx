'use client';

import { useState, useEffect } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

interface ApiKey {
  id: string;
  name?: string;
  start?: string;
  enabled: boolean;
  remaining?: number;
  rateLimitEnabled: boolean;
  rateLimitTimeWindow?: number;
  rateLimitMax?: number;
  createdAt: string;
  expiresAt?: string;
}

export default function ApiKeysPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [creating, setCreating] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyData, setNewKeyData] = useState<{ key: string; id: string } | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login');
    }
  }, [session, isPending, router]);

  // Fetch API keys
  const fetchApiKeys = async () => {
    if (!session) return;
    
    try {
      setLoading(true);
      const response = await fetch('/api/api-key/list', {
        credentials: 'include',
      });
      
      if (response.ok) {
        const keys = await response.json();
        setApiKeys(keys);
      } else {
        throw new Error('Failed to fetch API keys');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch API keys');
    } finally {
      setLoading(false);
    }
  };

  // Create new API key
  const createApiKey = async () => {
    if (!session || !newKeyName.trim()) return;
    
    try {
      setCreating(true);
      const response = await fetch('/api/api-key/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: newKeyName.trim(),
        }),
      });
      
      if (response.ok) {
        const newKey = await response.json();
        setNewKeyData(newKey);
        setNewKeyName('');
        fetchApiKeys(); // Refresh the list
      } else {
        throw new Error('Failed to create API key');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create API key');
    } finally {
      setCreating(false);
    }
  };

  // Delete API key
  const deleteApiKey = async (keyId: string) => {
    if (!session) return;
    
    if (!confirm('Are you sure you want to delete this API key?')) {
      return;
    }
    
    try {
      const response = await fetch('/api/api-key/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          keyId,
        }),
      });
      
      if (response.ok) {
        fetchApiKeys(); // Refresh the list
      } else {
        throw new Error('Failed to delete API key');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete API key');
    }
  };

  // Load API keys on mount
  useEffect(() => {
    if (session) {
      fetchApiKeys();
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">API Keys</h1>
          <p className="text-gray-600 mt-2">
            Manage your API keys for PlaceAstro access
          </p>
        </div>

        {/* New API Key Display */}
        {newKeyData && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              API Key Created Successfully!
            </h3>
            <p className="text-sm text-green-700 mb-2">
              Make sure to copy your API key now. You won't be able to see it again!
            </p>
            <div className="bg-white p-3 rounded border font-mono text-sm break-all">
              {newKeyData.key}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(newKeyData.key);
                alert('API key copied to clipboard!');
              }}
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={() => setNewKeyData(null)}
              className="mt-2 ml-2 px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Create New API Key */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Create New API Key</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              placeholder="API Key name (optional)"
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={createApiKey}
              disabled={creating}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {creating ? 'Creating...' : 'Create API Key'}
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
            {error}
            <button
              onClick={() => setError('')}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        )}

        {/* API Keys List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Your API Keys</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading API keys...</div>
          ) : apiKeys.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No API keys found. Create your first API key above.
            </div>
          ) : (
            <div className="divide-y">
              {apiKeys.map((key) => (
                <div key={key.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-medium">
                          {key.name || 'Unnamed Key'}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded ${
                            key.enabled
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {key.enabled ? 'Active' : 'Disabled'}
                        </span>
                      </div>
                      
                      <div className="mt-1 text-sm text-gray-500">
                        <span className="font-mono">
                          {key.start ? `${key.start}...` : 'Hidden'}
                        </span>
                      </div>
                      
                      <div className="mt-2 text-sm text-gray-600">
                        <div>Created: {new Date(key.createdAt).toLocaleDateString()}</div>
                        {key.expiresAt && (
                          <div>Expires: {new Date(key.expiresAt).toLocaleDateString()}</div>
                        )}
                        {key.rateLimitEnabled && (
                          <div>
                            Rate Limit: {key.rateLimitMax} requests per{' '}
                            {key.rateLimitTimeWindow ? 
                              Math.floor(key.rateLimitTimeWindow / 1000 / 60) + ' minutes' : 
                              'window'
                            }
                          </div>
                        )}
                        {typeof key.remaining === 'number' && (
                          <div>Remaining: {key.remaining} requests</div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => deleteApiKey(key.id)}
                      className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Usage Instructions */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">How to use your API key</h3>
          <p className="text-blue-800 text-sm mb-2">
            Include your API key in the request header:
          </p>
          <code className="block p-2 bg-white rounded text-sm font-mono">
            x-api-key: your_api_key_here
          </code>
          <p className="text-blue-800 text-sm mt-2">
            Example: <code>curl -H "x-api-key: your_api_key_here" https://placeastro.u7s.dev/m/16</code>
          </p>
        </div>
      </div>
    </div>
  );
}