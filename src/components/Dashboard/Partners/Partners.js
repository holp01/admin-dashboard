import React, { useState, useEffect } from 'react';
import {
    Card,
    Typography,
    Button
} from "@material-tailwind/react";
import { getPartners } from '../../../services/apiService';
import PartnerCreateModal from './PartnerCreateModal';

function Partners() {
    const [partners, setPartners] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchPartners = async () => {
        try {
            const fetchedPartners = await getPartners();
            setPartners(fetchedPartners);
        } catch (error) {
            console.error("Error fetching partners:", error.message);
        }
    };

    useEffect(() => {
        fetchPartners();
    }, []);

    return (
        <div>
            <Card className="p-3 mb-2 flex flex-row justify-between items-center">
                <Typography variant="h5" color="blue-gray">
                    Partners List
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
                        </tr>
                    </thead>
                    <tbody>
                        {partners.map(({ id, name, description }) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
            <PartnerCreateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={fetchPartners}
            />
        </div>
    );
}

export default Partners;
