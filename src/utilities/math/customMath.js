export default class CustomMath {
    calculateTotalAmount = (checkIn,checkOut,pricePerNight) => {
        return Math.round(((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24) + 1) * pricePerNight)
    }
}