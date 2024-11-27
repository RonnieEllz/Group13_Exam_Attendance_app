import { db as firebaseDb, addStudentToFirestore } from './firebase';
import { getAllLocalStudents, deleteLocalStudent } from './db';

/**
 * Sync local SQLite data with Firebase Firestore
 */
export const syncLocalToFirebase = async () => {
  try {
    console.log('Starting sync process...');
    const localStudents = await getAllLocalStudents(); // Fetch all local data from SQLite
    console.log('Local students:', localStudents);

    // Iterate through each local record and upload to Firebase
    for (const student of localStudents) {
      await addStudentToFirestore(student); // Add to Firestore
      await deleteLocalStudent(student.id); // Remove from SQLite after successful sync
      console.log(`Synced and deleted local student: ${student.name}`);
    }

    console.log('Sync process completed successfully.');
  } catch (error) {
    console.error('Error syncing data:', error);
  }
};
