import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name)

# Load the CSV data into a Pandas DataFrame
df = pd.read_csv('course-db.csv')

@app.route('/recommend', methods=['POST'])
def recommend_courses():
    keyword = request.form['keyword']  # Get the keyword from the form

    # Filter courses with the keyword in the description
    matching_courses = df[df['Course Description'].str.contains(keyword, case=False)]
    top_3_courses = matching_courses.head(3)  # Get the top 3 matching courses

    recommendations = top_3_courses[['Course Name', 'Course URL']].to_dict(orient='records')

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
