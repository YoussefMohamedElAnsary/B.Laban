import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const AdminSetup = () => {
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');

    const createAdminUser = async () => {
        try {
            setStatus('Creating admin user...');
            setError('');
            
            // Create the admin user
            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                'admin@admin.admin', 
                'Admin123'
            );
            
            // Store admin user data in Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                email: 'admin@admin.admin',
                role: 'admin',
                createdAt: new Date()
            });
            
            setStatus('Admin user created successfully!');
            console.log('Admin user created with UID:', userCredential.user.uid);
            
        } catch (error) {
            setError(`Error creating admin user: ${error.message}`);
            console.error('Error creating admin user:', error);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Admin Setup</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-yellow-800">
                    <strong>Admin Credentials:</strong><br/>
                    Email: admin@admin.admin<br/>
                    Password: Admin123
                </p>
            </div>
            <button
                onClick={createAdminUser}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mb-4"
            >
                Create Admin User
            </button>
            {status && (
                <div className="text-green-600 text-sm mb-2">{status}</div>
            )}
            {error && (
                <div className="text-red-600 text-sm">{error}</div>
            )}
        </div>
    );
};

export default AdminSetup; 