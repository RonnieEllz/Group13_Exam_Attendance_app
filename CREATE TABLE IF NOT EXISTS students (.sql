CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,                      -- Name cannot be NULL
    email TEXT NOT NULL UNIQUE,              -- Unique email
    attendance_status TEXT CHECK (
        attendance_status IN ('Present', 'Absent', 'Unknown')
    ) DEFAULT 'Unknown',                     -- Default status is 'Unknown'
    synced INTEGER DEFAULT 0,                -- 0 for not synced, 1 for synced
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the student was added
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Timestamp for when the student was last updated
);
