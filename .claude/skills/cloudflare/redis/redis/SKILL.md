---
name: redis
description: Redis in-memory data structure store - use for caching, session management, pub/sub, real-time analytics, and key-value storage
---

# Redis Skill

Comprehensive assistance with Redis development, generated from official documentation.

## When to Use This Skill

This skill should be triggered when:
- Implementing caching layers or session storage
- Building real-time applications (pub/sub, leaderboards, analytics)
- Working with Redis data types (strings, hashes, lists, sets, sorted sets)
- Setting up Redis persistence (RDB, AOF)
- Implementing distributed locks or rate limiting
- Using Redis for vector search and AI/ML applications
- Configuring Redis clusters or enterprise deployments
- Debugging Redis performance or memory issues
- Integrating Redis with Python, Node.js, or other languages

## Quick Reference

### Basic Key-Value Operations

```bash
# Set a string value
SET user:1000 "John Doe"

# Set with expiration (10 seconds)
SET session:xyz "token123" EX 10

# Get a value
GET user:1000

# Delete keys
DEL user:1000 session:xyz

# Check time to live
TTL session:xyz
```

### Working with Hashes

```bash
# Set multiple hash fields
HSET user:1001 name "Jane Smith" email "jane@example.com" age 28

# Get a single field
HGET user:1001 name

# Get all fields and values
HGETALL user:1001

# Increment a numeric field
HINCRBY user:1001 age 1
```

### Lists for Queues

```python
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Push items to a queue
r.lpush('jobs:queue', 'job1', 'job2', 'job3')

# Pop from queue (FIFO)
job = r.rpop('jobs:queue')

# Blocking pop (waits for items)
job = r.brpop('jobs:queue', timeout=5)
```

### Sets for Unique Collections

```bash
# Add members to a set
SADD tags:article:1 "redis" "database" "cache"

# Check membership
SISMEMBER tags:article:1 "redis"

# Get all members
SMEMBERS tags:article:1

# Set operations
SINTER tags:article:1 tags:article:2  # Intersection
SUNION tags:article:1 tags:article:2   # Union
```

### Sorted Sets for Leaderboards

```python
import redis

r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Add scores
r.zadd('leaderboard', {'player1': 100, 'player2': 150, 'player3': 80})

# Get top 3 players (highest scores)
top_players = r.zrevrange('leaderboard', 0, 2, withscores=True)

# Get rank of a player
rank = r.zrevrank('leaderboard', 'player1')

# Increment score
r.zincrby('leaderboard', 10, 'player1')
```

### Expiration and TTL

```bash
# Set expiration on existing key
EXPIRE user:session:abc 3600

# Set key with expiration
SETEX cache:data 300 "cached value"

# Check remaining time
TTL cache:data

# Remove expiration
PERSIST cache:data
```

### Pub/Sub Pattern

```python
import redis

# Publisher
r = redis.Redis(host='localhost', port=6379)
r.publish('notifications', 'New message!')

# Subscriber
pubsub = r.pubsub()
pubsub.subscribe('notifications')

for message in pubsub.listen():
    if message['type'] == 'message':
        print(f"Received: {message['data']}")
```

### Authentication

```bash
# Authenticate with password
AUTH mypassword

# Authenticate with username and password (ACL)
AUTH username mypassword
```

### Distributed Locks

```python
import redis
import time

r = redis.Redis(host='localhost', port=6379)

# Acquire lock
lock_key = 'resource:lock'
lock_value = 'unique-token-123'

# Try to acquire lock (NX = only if not exists)
acquired = r.set(lock_key, lock_value, nx=True, ex=10)

if acquired:
    try:
        # Perform critical section
        print("Lock acquired, doing work...")
    finally:
        # Release lock only if we own it
        if r.get(lock_key) == lock_value:
            r.delete(lock_key)
```

### Vector Search (AI/ML)

```python
from redis import Redis
from redis.commands.search.field import VectorField, TextField
from redis.commands.search.indexDefinition import IndexDefinition

r = Redis(host='localhost', port=6379)

# Create index with vector field
schema = (
    TextField("content"),
    VectorField("embedding",
        "FLAT",
        {
            "TYPE": "FLOAT32",
            "DIM": 512,
            "DISTANCE_METRIC": "COSINE"
        }
    )
)

r.ft("idx:vectors").create_index(
    schema,
    definition=IndexDefinition(prefix=["doc:"])
)
```

## Reference Files

This skill includes comprehensive documentation in `references/`:

### commands.md
Complete Redis commands reference including:
- **Core Commands**: SET, GET, DEL, EXPIRE, TTL, AUTH
- **Hash Commands**: HSET, HGET, HGETALL for working with hash data types
- **Data Structures**: Lists, Sets, Sorted Sets operations
- **Search & Query**: Full-text search, indexing, vector operations
- **Client Libraries**: Official clients for Python, Node.js, Java, and more

### llms.md
Structured documentation index organized by category:
- **Core Docs**: Getting started guides and API overviews
- **Commands Reference**: Detailed syntax and examples for all commands
- **Development**: Client libraries, data types, patterns, and tools
- **Integrations**: Python (redis-py), RedisVL, RIOT, Prometheus, Vercel
- **Operations**: Installation, configuration, persistence, clustering, backups

## Working with This Skill

### For Beginners
Start with basic operations:
1. Review the **Quick Reference** section for common patterns
2. Explore [Quick starts guide](https://redis.io/docs/latest/develop/get-started/)
3. Learn about [Redis data types](https://redis.io/docs/latest/develop/data-types/)
4. Practice with redis-cli or Redis for VS Code

### For Application Developers
Focus on integration patterns:
1. Choose your [client library](https://redis.io/docs/latest/develop/clients/)
2. Understand data type selection for your use case
3. Implement patterns like caching, sessions, or queues
4. Review [distributed locks](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/) for concurrency

### For Advanced Use Cases
Explore enterprise features:
1. **Search & Query**: Full-text search, secondary indexes, filtering
2. **Vector Search**: Store and query embeddings for AI applications
3. **Persistence**: Configure RDB snapshots and AOF for durability
4. **Clustering**: Deploy Redis Enterprise or Kubernetes operators
5. **Monitoring**: Prometheus metrics, Redis Insight, performance tuning

## Key Concepts

### Data Types
Redis supports rich data structures beyond simple key-value:
- **Strings**: Binary-safe strings, integers, bitmaps
- **Hashes**: Field-value pairs, ideal for objects
- **Lists**: Ordered collections, implement queues/stacks
- **Sets**: Unordered unique elements, set operations
- **Sorted Sets**: Ordered by score, leaderboards, time-series
- **Streams**: Append-only log, event sourcing
- **Geospatial**: Location-based queries
- **Bitmaps & HyperLogLog**: Space-efficient counting

### Expiration & Eviction
- **TTL**: Set automatic expiration on keys
- **Eviction Policies**: Control behavior when memory is full (LRU, LFU, etc.)
- **Persistence**: Choose between RDB snapshots and AOF logs

### Performance Patterns
- **Pipelining**: Batch commands to reduce round trips
- **Transactions**: MULTI/EXEC for atomic operations
- **Pub/Sub**: Real-time messaging between clients
- **Lua Scripts**: Server-side scripting for complex operations

### Common Use Cases
- **Caching**: Reduce database load with TTL-based cache
- **Session Store**: Fast user session management
- **Rate Limiting**: Token bucket or sliding window
- **Leaderboards**: Sorted sets for rankings
- **Real-time Analytics**: Counters, streams, time-series
- **Message Queue**: Lists with blocking operations
- **Distributed Locks**: Coordination across services

## Resources

### references/
Organized documentation extracted from official sources:
- Detailed command syntax and parameters
- Code examples in multiple languages
- Links to original Redis documentation
- Best practices and performance tips

### Official Tools
- **redis-cli**: Command-line interface for Redis
- **Redis Insight**: GUI for visualization and debugging
- **Redis for VS Code**: Extension for development

### Client Libraries
- **redis-py**: Official Python client
- **node-redis**: Official Node.js client
- **Jedis**: Java client
- **StackExchange.Redis**: .NET client

## Notes

- This skill was automatically generated from official Redis documentation
- Examples prioritize clarity and practical application
- Code snippets use proper language detection for syntax highlighting
- All examples are based on Redis 7.x latest documentation

## Updating

To refresh this skill with updated documentation:
1. Re-run the scraper with the same configuration
2. The skill will be rebuilt with the latest information from redis.io
