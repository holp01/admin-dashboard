import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
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
        <Dialog open={isOpen} handler={onClose}>
            <DialogHeader>Create New Partner</DialogHeader>
            <DialogBody divider>
                <Input 
                    type="text" 
                    color="lightBlue" 
                    size="regular" 
                    outline={true}
                    placeholder="Partner Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    type="text" 
                    color="lightBlue" 
                    size="regular" 
                    outline={true}
                    placeholder="Description" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                    className="mt-2"
                />
            </DialogBody>
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
                    Add Partner
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default PartnerCreateModal;
