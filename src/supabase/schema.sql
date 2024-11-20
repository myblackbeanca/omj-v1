-- Create podcast_subscribers table
CREATE TABLE podcast_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for email lookups
CREATE INDEX idx_podcast_subscribers_email ON podcast_subscribers(email);

-- Enable Row Level Security
ALTER TABLE podcast_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts
CREATE POLICY "Allow public inserts" ON podcast_subscribers FOR INSERT WITH CHECK (true);

-- Create policy to allow reads from authenticated users
CREATE POLICY "Allow authenticated reads" ON podcast_subscribers FOR SELECT USING (auth.role() = 'authenticated');