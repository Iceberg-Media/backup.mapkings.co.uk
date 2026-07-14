-- Checklist items (things needed, things done)
CREATE TABLE IF NOT EXISTS checklist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL, -- 'access', 'website', 'gbp', 'content', 'seo'
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'done', 'not_needed'
  required_date TEXT, -- when we asked for it
  completed_date TEXT, -- when it was done
  notes TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Ranking tracking
CREATE TABLE IF NOT EXISTS rankings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  keyword TEXT NOT NULL,
  position INTEGER,
  url TEXT,
  tracked_at TEXT DEFAULT (datetime('now'))
);

-- Competitor tracking
CREATE TABLE IF NOT EXISTS competitors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  website TEXT,
  location TEXT,
  services TEXT,
  rating REAL,
  review_count INTEGER,
  notes TEXT,
  tracked_at TEXT DEFAULT (datetime('now'))
);

-- Work log
CREATE TABLE IF NOT EXISTS work_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  completed_at TEXT DEFAULT (datetime('now'))
);

-- Weekly snapshots (for comparing progress)
CREATE TABLE IF NOT EXISTS snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  snapshot_type TEXT NOT NULL, -- 'weekly', 'monthly'
  data TEXT NOT NULL, -- JSON blob of all metrics
  created_at TEXT DEFAULT (datetime('now'))
);
