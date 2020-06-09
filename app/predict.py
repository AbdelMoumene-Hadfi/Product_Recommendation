import numpy as np
from surprise import KNNWithMeans
from surprise import Dataset
from surprise import accuracy
from surprise import Reader
from surprise.model_selection import train_test_split
import pickle
model = pickle.load(open('knnmean.sav', 'rb'))
def predict_user(iduser,product_list) :
    predictl=[]
    for i in product_list :
        predictl.append((i,model.predict(uid=iduser,iid=i).est))
    predictl.sort(key=lambda x:x[1],reverse=True)
    predictl=predictl[:10]
    predict = {}
    for i in range(len(predictl)) :
        predict[i]=(predictl[i][0],predictl[i][1])
    return predict
