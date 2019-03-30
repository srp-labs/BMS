from requests import get
import numpy as np

url = "http://swoogle.umbc.edu/SimService/GetSimilarity"

def show_progress():
    print("Progress Shown")

def top_posts():
    print("Top Posts")

def get_best_match(text):
    possible_actions = list(open('predefined-actions.txt'))

    result = []
    func = []
    for each in possible_actions:
        each = each.split('@')
        sample = each[0]
        response = get(url, params={'operation': 'api', 'phrase1': text,
                                    'phrase2': sample, 'type': 'relation', 'corpus': 'webbase'})
        result.append(float(response.text.strip()))
        func.append((each[1].split('\n'))[0])

    action = np.argmax(np.array(result))

    possibles = globals().copy()
    possibles.update(locals())
    caller = possibles.get(func[action])
    caller()