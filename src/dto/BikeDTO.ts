export default interface BikeDTO {
  number: number;
  name: string;
  contractName: string;
  address: string;
  status: boolean;
  position: {
    latitude: string;
    longitude: string;
  };
}
