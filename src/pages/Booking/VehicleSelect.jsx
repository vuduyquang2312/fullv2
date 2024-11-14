import React from 'react';
import Image4Seat from '../../assets/4seat.png';
import Image4SeatActive from '../../assets/4seat_active.jpg';
import Image5Seat from '../../assets/5seat.jpg';
import Image5SeatActive from '../../assets/5seat_active.jpg';
import Image7Seat from '../../assets/7seat.jpg';
import Image7SeatActive from '../../assets/7seat_active.jpg';
import Image16Seat from '../../assets/16seat.jpg';
import Image16SeatActive from '../../assets/16seat_active.jpg';

const vehicles = [
    { id: 1, image: Image4Seat, activeImage: Image4SeatActive, label: 'Xe 4 chỗ' },
    { id: 2, image: Image5Seat, activeImage: Image5SeatActive, label: 'Xe 5 chỗ' },
    { id: 3, image: Image7Seat, activeImage: Image7SeatActive, label: 'Xe 7 chỗ' },
    { id: 4, image: Image16Seat, activeImage: Image16SeatActive, label: 'Xe 16 chỗ' },
];

const VehicleSelect = ({ selectedVehicle, handleVehicleSelect }) => {
    return (
        <div className="my-4">
            <label className="text-gray-500 text-xs md:text-base flex justify-start mb-2">Loại xe</label>
            <div className="flex justify-center mt-4">
                {vehicles.map((vehicle) => (
                    <button
                        key={vehicle.id}
                        type="button"
                        onClick={() => handleVehicleSelect(vehicle.id)}
                        className={`flex flex-col justify-center items-center md:px-8 px-4 transition-all duration-300 ${selectedVehicle === vehicle.id ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        <img
                            src={selectedVehicle === vehicle.id ? vehicle.activeImage : vehicle.image}
                            alt={vehicle.label}
                            className={`object-cover rounded-full transition-all duration-300 md:w-12 md:h-12`}
                        />
                        <span className="mt-2 text-xs md:text-base text-gray-500">{vehicle.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VehicleSelect;