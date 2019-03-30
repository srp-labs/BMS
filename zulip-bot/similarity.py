from requests import get
import numpy as np
import requests
import re

similarity_url = "http://swoogle.umbc.edu/SimService/GetSimilarity"

server_url = "http://172.18.4.211:9000/api/"

def show_progress(msg):
    email = msg['sender_email']
    res = requests.get(url=server_url+'progress/', params={'email': email })
    data = res.json()
    if (data['status']=='SUCCESS'):
        return 'You have completed ' + data['progress'] + '% of the series :happy:'
    else:
        return ''

def trending_posts(msg):
    pattern = r"\d+"
    num_posts = int(re.findall(pattern,msg.content)[0])
    res = requests.get(url=server_url, params={ 'num_posts': num_posts })
    data = res.json()
    reply = 'Following are the top ' + str(num_posts) + 'trending posts:-\n'
    ctr = 1
    for each in data['posts']:
        reply += str(ctr) + ' ' + each['name'] + '(' + each['link'] + ')\n'
        ctr = ctr + 1
    return reply

def get_result(msg):
    possible_actions = list(open('predefined-actions.txt'))
    text = msg['content'].lower()

    result = []
    func = []
    for each in possible_actions:
        each = each.split('@')
        sample = each[0]
        response = get(similarity_url, params={'operation': 'api', 'phrase1': text,
                                    'phrase2': sample, 'type': 'relation', 'corpus': 'webbase'})
        result.append(float(response.text.strip()))
        func.append((each[1].split('\n'))[0])

    action = np.argmax(np.array(result))

    possibles = globals().copy()
    possibles.update(locals())
    caller = possibles.get(func[action])
    return caller(msg)
