-- ===================================================================
-- ModelVault Supabase Database Schema
-- Production Ready DDL for 'models' Table
-- ===================================================================

-- 1. Drop existing table if it was created with default columns
DROP TABLE IF EXISTS public.models CASCADE;

-- 2. Create the 'models' table matching AIModel type definition & models_db.json
CREATE TABLE public.models (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  provider TEXT NOT NULL,
  "providerSlug" TEXT NOT NULL,
  description TEXT DEFAULT '',
  type TEXT DEFAULT '',
  "useCases" JSONB DEFAULT '[]'::jsonb,
  modalities JSONB DEFAULT '[]'::jsonb,
  availability TEXT DEFAULT 'cloud',
  "hasApi" BOOLEAN DEFAULT false,
  "hasSelfHost" BOOLEAN DEFAULT false,
  license TEXT DEFAULT '',
  pricing TEXT DEFAULT 'free',
  "pricingDetails" TEXT DEFAULT '',
  "contextWindow" TEXT DEFAULT '',
  "hardwareRequirements" TEXT DEFAULT '',
  benchmarks JSONB DEFAULT '[]'::jsonb,
  "releaseDate" TEXT DEFAULT '',
  "lastUpdated" TEXT DEFAULT '',
  "lastVerified" TEXT DEFAULT '',
  strengths JSONB DEFAULT '[]'::jsonb,
  weaknesses JSONB DEFAULT '[]'::jsonb,
  "docUrl" TEXT DEFAULT '',
  "playgroundUrl" TEXT DEFAULT '',
  "modelCardUrl" TEXT DEFAULT '',
  tags JSONB DEFAULT '[]'::jsonb,
  aliases JSONB DEFAULT '[]'::jsonb,
  featured BOOLEAN DEFAULT false,
  trending BOOLEAN DEFAULT false,
  "isDeprecated" BOOLEAN DEFAULT false,
  "bestForCategory" TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_models_provider_slug ON public.models ("providerSlug");
CREATE INDEX IF NOT EXISTS idx_models_featured ON public.models (featured);
CREATE INDEX IF NOT EXISTS idx_models_trending ON public.models (trending);
CREATE INDEX IF NOT EXISTS idx_models_availability ON public.models (availability);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.models ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies (Allow Read & Upsert for app API / client)
CREATE POLICY "Allow public read access" ON public.models FOR SELECT USING (true);
CREATE POLICY "Allow public full access" ON public.models FOR ALL USING (true);
