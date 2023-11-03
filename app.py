from flask import Flask, render_template, request
import pandas as pd

app = Flask(__name__)

# Load course data from the CSV file
course_data = pd.read_csv('courses.csv')

@app.route('/')
def index():
    return render_template('recommend.html', courses=[])

@app.route('/recommend', methods=['POST'])

def recommend():
    keyword = request.form['interestInput']

    # Filter courses based on the keyword in the description
    matching_courses = course_data[course_data['Course Description'].str.contains(keyword, case=False)]

    # Get the first 3 matching courses as recommendations
    recommended_courses = matching_courses['Course Name'][:3].tolist()

    return render_template('recommend.html', courses=recommended_courses)

def filter_courses_by_keyword(keyword):
    # Filter courses based on the keyword in the description
    matching_courses = course_data[course_data['Course Description'].str.contains(keyword, case=False)]

    # Get the first 3 matching courses as recommendations
    recommended_courses = matching_courses['Course Name'][:3].tolist()

    return recommended_courses

if __name__ == '__main__':
    app.run(debug=True)
