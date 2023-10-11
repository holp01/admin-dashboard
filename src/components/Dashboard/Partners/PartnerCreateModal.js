import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogFooter,
    Input,
    Typography,
    Card,
    CardHeader,
    CardBody
} from '@material-tailwind/react';
import { createPartner } from '../../../services/apiService';

function PartnerCreateModal({ isOpen, onClose, onAdd }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        try {
            await createPartner({ name, description });
            onAdd();
            onClose();
        } catch (error) {
            console.error('Error creating new partner:', error);
        }
    };

    return (
        <Dialog open={isOpen} handler={onClose} className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[30rem]">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Create New Partner
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        type="text"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </CardBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={onClose}
                        className="mr-1"
                    >
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogFooter>
            </Card>
        </Dialog>
    );
}

export default PartnerCreateModal;
