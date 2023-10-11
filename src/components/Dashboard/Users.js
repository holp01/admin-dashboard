import React, { useState, useEffect } from 'react';
import {
    Card,
    Typography
} from "@material-tailwind/react";
import { getUsers } from '../../services/apiService';

function Users() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Card className="p-3 mb-2">
                <Typography variant="h5" color="blue-gray">
                    Users List
                </Typography>
            </Card>
            <Card className="h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Name</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Email</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Reward Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ displayName, email, rewardPoints }, index) => (
                            <tr key={email}>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {displayName}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {email}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {rewardPoints}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default Users;
