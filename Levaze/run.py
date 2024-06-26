from flask import Flask, make_response, render_template,request
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite///subscription.db'
db = SQLAlchemy(app)

class subscriber(db.Model):
    id = db.Column(db.Integer,primary_key = True, autoincrement = True)
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), primary_key = True, nullable = False)


@app.route('/home',methods=["POST","GET"])
def home():
    if request.method=="POST":
        name = request.form.get('name')
        return render_template("main.html")
    return render_template('main.html')

@app.route('/latest_blogs')
def latest_blogs():
    return render_template('Latest_blogs.html')

@app.route('/about_us')
def about_us():
    return render_template('About_us.html')

@app.route('/contact_us')
def contact_us():
    return render_template('Contact_us.html')

@app.route('/categories')
def categories():
    return render_template('Categories.html')

@app.route('/')
def start():
    return render_template('start.html')

@app.route('/blackhole')
def blackhole():
    return render_template('blogs/Astronomy/blackhole.html')

@app.route('/ai_drug')
def ai_drug():
    return render_template('blogs/Technology/ai_drug.html')

@app.route('/ai_healthcare')
def ai_healthcare():
    return render_template('blogs/Technology/ai_healthcare.html')

@app.route('/ai_m')
def ai_m():
    return render_template('blogs/Technology/ai_m&m.html')


@app.route('/subscribe_form',methods = ["POST","GET"])
def subscriber():
    if request.method == "POST":
        name = request.form.get('name')
        email = request.form.get('email')
        if name and email:
            print(name,email)
            return render_template('start.html')
if __name__ == "__main__":
    app.run(debug=True)