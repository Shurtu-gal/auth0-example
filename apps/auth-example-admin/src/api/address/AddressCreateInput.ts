import { CustomerCreateNestedManyWithoutAddressesInput } from "./CustomerCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
