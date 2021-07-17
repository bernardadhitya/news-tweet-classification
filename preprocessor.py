import pandas as pd
import pickle

class Preprocessor():
  def prepare_dataset(self, df):
    return df[:3000]
  def prepare_test_dataset(self, df):
    idx = [124, 162, 174, 184, 185, 292, 460, 464, 521, 527, 574, 588, 625, 705, 763, 842, 854, 901, 902, 1006, 1043, 1050, 1102, 1274, 1326, 1381, 1396, 1404, 1409, 1619, 1656, 1867, 1882, 1884, 2025, 2100, 2266, 2277, 2311, 2329, 2365, 2441, 2655, 2742, 2811, 2902, 2913, 2943, 2965, 2977]
    test_data_temp = df.copy()
    test_data_temp = test_data_temp.drop(idx, axis=0)
    return test_data_temp