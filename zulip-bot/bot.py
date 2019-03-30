import zulip
from similarity import get_result

class ZulipBot(object):
    def __init__(self):
        self.client = zulip.Client(site="https://reactdj.zulipchat.com/api/")

    def process(self, msg):
        reply = get_result(msg)
        print(msg['content'], reply)
        self.client.send_message({
            'type': 'stream',
            'subject': msg['subject'],
            'to': msg['display_recipient'],
            'content': reply
        })

if __name__ == '__main__':
    bot = ZulipBot()
    bot.client.call_on_each_message(bot.process)
