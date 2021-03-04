export default interface BikeDTO {
  number: number;
  name: string;
  contractName: string;
  address: string;
  status: boolean;
  position: {
    latitude: number;
    longitude: number;
  };
  totalStands: {
    capacity: number;
    availabilities: {
      bikes: number;
      stands: number;
    };
  };
}
