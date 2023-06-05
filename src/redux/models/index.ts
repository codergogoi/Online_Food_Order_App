export interface Address {
  city: string;
  district: string;
  streetNumber: string;
  street: string;
  country: string;
  postalCode: string;
}

// category
export interface Category {
  id: string;
  title: String;
  icon: String;
}

// Food Model
export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: [string];
  unit: number;
}

//Restaurant Model
export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  foods: [FoodModel];
}

export interface FoodAvailability {
  categories: [Category];
  restaurants: [Restaurant];
  foods: [FoodModel];
}

//todo : Modify later
//User Model
export interface UserModel {
  firstName: string;
  lastName: String;
  contactNumber: String;
  token: string;
  varified: boolean;
}

export interface UserState {
  user: UserModel;
  location: Address;
  error: string | undefined;
  Cart: [FoodModel];
  //orders
}

export interface ShoppingState {
  availability: FoodAvailability;
  availableFoods: [FoodModel];
  //other models
}
