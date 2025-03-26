import pickle
import json
import numpy as np

__locations = None
__data_columns = None
__model = None


def load_saved_artifacts():
    print("loading saved artifacts..start")
    global __data_columns
    global __model
    global __locations

    with open("./artifacts/columns.json","r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:] # eliminating sqft, bhk, bath

    if __model is None: 
        with open("./artifacts/bangalore_home_price_prediction.pickle","rb") as f:
            __model = pickle.load(f)
print("loading saved artifacts..done")


def get_location_name():
    return __locations

def get_data_columns():
    return __data_columns

def get_estimated_price(location, sqft , bhk , bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x =np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if (loc_index>= 0):
        x[loc_index] = 1
    return round(__model.predict([x])[0],2) # Round float value upto 2 decimal points

if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_name())
    print(get_estimated_price('Hebbal', 1060, 3, 3))
    print(get_estimated_price('Bellandur', 960, 2, 3))
    print(get_estimated_price('Kalhalli', 1000, 2, 2)) # other location
    print(get_estimated_price('Ejipura', 1000, 2, 2))  # other location