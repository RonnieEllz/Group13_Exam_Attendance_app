import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('examAttendance.db');

// Create Tables
export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        attendance_status TEXT CHECK(attendance_status IN ('Present', 'Absent', 'Unknown')) DEFAULT 'Unknown',
        synced INTEGER DEFAULT 0
      );`,
      [],
      () => console.log("Students table created successfully."),
      (_, error) => console.error("Error creating students table:", error)
    );

    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS attendance (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        exam_date TEXT NOT NULL,
        status TEXT CHECK(status IN ('Present', 'Absent', 'Unknown')) DEFAULT 'Unknown',
        synced INTEGER DEFAULT 0,
        FOREIGN KEY (student_id) REFERENCES students (id)
      );`,
      [],
      () => console.log("Attendance table created successfully."),
      (_, error) => console.error("Error creating attendance table:", error)
    );
  });
};

// Add Student
export const addStudent = (name, email) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO students (name, email) VALUES (?, ?);`,
      [name, email],
      (_, result) => console.log('Student added:', result),
      (_, error) => console.error('Error adding student:', error)
    );
  });
};

// Fetch All Students
export const getStudents = callback => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM students;`,
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.error('Error fetching students:', error)
    );
  });
};

// Mark Attendance
export const markAttendance = (studentId, examDate, status) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO attendance (student_id, exam_date, status) VALUES (?, ?, ?);`,
      [studentId, examDate, status],
      (_, result) => console.log('Attendance marked:', result),
      (_, error) => console.error('Error marking attendance:', error)
    );
  });
};

// Fetch Attendance for a Student
export const getAttendance = (studentId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM attendance WHERE student_id = ?;`,
      [studentId],
      (_, result) => callback(result.rows._array),
      (_, error) => console.error('Error fetching attendance:', error)
    );
  });
};
