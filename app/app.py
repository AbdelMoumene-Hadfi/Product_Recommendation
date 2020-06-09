from flask import Flask , jsonify ,request
from flask_cors import CORS ,cross_origin
from file import product,productl,user,userl,rating,find_user,product_top
from predict import predict_user
app = Flask(__name__)
cors = CORS(app)

@app.route('/pred_product',methods=['POST'])
@cross_origin()
def pred_product():
    if not request.json or not 'Id' in request.json :
        abort(400)

    if not find_user(request.json["Id"],userl) :
        return "user not found",404
    return jsonify(predict_user(request.json["Id"],productl))

@app.route('/rating',methods=['POST'])
@cross_origin()
def rating_func():
    return jsonify(rating)

@app.route('/product',methods=['POST'])
@cross_origin()
def top_product():
    return jsonify(product_top(productl))


if __name__ == '__main__':
    app.run(debug=False)
