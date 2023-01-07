from flask import Flask,request,jsonify,render_template
app = Flask(__name__)



@app.route('/',methods = ['POST', 'GET'])
def index():
    return render_template("index.html")




@app.route('/fider1of1',methods = ['POST'])
def fider1of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider1of2',methods = ['POST'])
def fider1of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider1of3',methods = ['POST'])
def fider1of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider1of4',methods = ['POST'])
def fider1of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider1of5',methods = ['POST'])
def fider1of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider1of6',methods = ['POST'])
def fider1of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider1of7',methods = ['POST'])
def fider1of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider1of8',methods = ['POST'])
def fider1of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)



@app.route('/fider2of1',methods = ['POST'])
def fider2of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider2of2',methods = ['POST'])
def fider2of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider2of3',methods = ['POST'])
def fider2of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider2of4',methods = ['POST'])
def fider2of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider2of5',methods = ['POST'])
def fider2of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider2of6',methods = ['POST'])
def fider2of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider2of7',methods = ['POST'])
def fider2of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider2of8',methods = ['POST'])
def fider2of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)



@app.route('/fider3of1',methods = ['POST'])
def fider3of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider3of2',methods = ['POST'])
def fider3of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider3of3',methods = ['POST'])
def fider3of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider3of4',methods = ['POST'])
def fider3of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider3of5',methods = ['POST'])
def fider3of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider3of6',methods = ['POST'])
def fider3of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider3of7',methods = ['POST'])
def fider3of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider3of8',methods = ['POST'])
def fider3of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)    



@app.route('/fider4of1',methods = ['POST'])
def fider4of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider4of2',methods = ['POST'])
def fider4of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider4of3',methods = ['POST'])
def fider4of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider4of4',methods = ['POST'])
def fider4of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider4of5',methods = ['POST'])
def fider4of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider4of6',methods = ['POST'])
def fider4of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider4of7',methods = ['POST'])
def fider4of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider4of8',methods = ['POST'])
def fider4of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)



@app.route('/fider5of1',methods = ['POST'])
def fider5of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider5of2',methods = ['POST'])
def fider5of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider5of3',methods = ['POST'])
def fider5of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider5of4',methods = ['POST'])
def fider5of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider5of5',methods = ['POST'])
def fider5of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider5of6',methods = ['POST'])
def fider5of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider5of7',methods = ['POST'])
def fider5of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider5of8',methods = ['POST'])
def fider5of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)



@app.route('/fider6of1',methods = ['POST'])
def fider6of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider6of2',methods = ['POST'])
def fider6of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider6of3',methods = ['POST'])
def fider6of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider6of4',methods = ['POST'])
def fider6of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider6of5',methods = ['POST'])
def fider6of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider6of6',methods = ['POST'])
def fider6of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider6of7',methods = ['POST'])
def fider6of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider6of8',methods = ['POST'])
def fider6of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)



@app.route('/fider7of1',methods = ['POST'])
def fider7of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider7of2',methods = ['POST'])
def fider7of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider7of3',methods = ['POST'])
def fider7of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider7of4',methods = ['POST'])
def fider7of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider7of5',methods = ['POST'])
def fider7of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider7of6',methods = ['POST'])
def fider7of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider7of7',methods = ['POST'])
def fider7of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider7of8',methods = ['POST'])
def fider7of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)




@app.route('/fider8of1',methods = ['POST'])
def fider8of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider8of2',methods = ['POST'])
def fider8of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider8of3',methods = ['POST'])
def fider8of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider8of4',methods = ['POST'])
def fider8of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider8of5',methods = ['POST'])
def fider8of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider8of6',methods = ['POST'])
def fider8of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        


@app.route('/fider8of7',methods = ['POST'])
def fider8of7():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)


@app.route('/fider8of8',methods = ['POST'])
def fider8of8():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)




@app.route('/fider9of1',methods = ['POST'])
def fider9of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider9of2',methods = ['POST'])
def fider9of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider9of3',methods = ['POST'])
def fider9of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider9of4',methods = ['POST'])
def fider9of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider9of5',methods = ['POST'])
def fider9of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider9of6',methods = ['POST'])
def fider9of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 




@app.route('/fider10of1',methods = ['POST'])
def fider10of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider10of2',methods = ['POST'])
def fider10of2():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data) 

@app.route('/fider10of3',methods = ['POST'])
def fider10of3():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)  

@app.route('/fider10of4',methods = ['POST'])
def fider10of4():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider10of5',methods = ['POST'])
def fider10of5():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider10of6',methods = ['POST'])
def fider10of6():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)   

@app.route('/fider11of1',methods = ['POST'])
def fider11of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/fider12of1',methods = ['POST'])
def fider12of1():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)




@app.route('/range1_val',methods = ['POST'])
def range1_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range2_val',methods = ['POST'])
def range2_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range3_val',methods = ['POST'])
def range3_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)
    
@app.route('/range4_val',methods = ['POST'])
def range4_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range5_val',methods = ['POST'])
def range5_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range6_val',methods = ['POST'])
def range6_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)        

@app.route('/range7_val',methods = ['POST'])
def range7_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range8_val',methods = ['POST'])
def range8_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range9_val',methods = ['POST'])
def range9_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range10_val',methods = ['POST'])
def range10_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)

@app.route('/range11_val',methods = ['POST'])
def range11_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)
    
@app.route('/range12_val',methods = ['POST'])
def range12_val():
    if request.method == "POST":
        json_data = request.get_json()
        print(json_data)
    return jsonify(json_data)    


if __name__ == '__main__':
    app.run(debug = True)
