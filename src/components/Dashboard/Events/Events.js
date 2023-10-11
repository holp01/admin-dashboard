import React, { useState, useEffect } from 'react';
import {
    Card,
    Typography,
    Button
} from "@material-tailwind/react";
import { getEvents } from '../../../services/apiService';

import EventCreateModal from './EventCreateModal';

function Events() {
    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchEvents = async () => {
        try {
            const fetchedEvents = await getEvents();
            setEvents(fetchedEvents);
        } catch (error) {
            console.error("Error fetching events:", error.message);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
           <Card className="p-3 mb-2 flex flex-row justify-between items-center">
                <Typography variant="h5" color="blue-gray">
                   Events List
                </Typography>
                <Button
                    onClick={() => setIsModalOpen(true)}
                >
                    + New
                </Button>
            </Card>
            <Card className="h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Name</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Description</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Points Reward</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Meters Required</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">Start Date</th>
                            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map(({ id, name, description, pointsReward, metersRequired, startDate, endDate }) => (
                            <tr key={id}>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {description}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {pointsReward}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {metersRequired}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {new Date(startDate).toLocaleDateString()}
                                    </Typography>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {new Date(endDate).toLocaleDateString()}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <EventCreateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={fetchEvents}
            />
        </div>
    );
}

export default Events;
