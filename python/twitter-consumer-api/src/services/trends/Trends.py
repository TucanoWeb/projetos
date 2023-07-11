import tweepy
import src.envs.keys as Twitter


class Trends():

    # Para casos que usuário não possui licença pro, utilizar MOCK
    def get_trends(woe_id: int):

        auth = tweepy.OAuth1UserHandler(
            Twitter.API_KEY_TWITTER, Twitter.API_KEY_SECRET_TWITTER)

        api = tweepy.API(auth)

        trends = api.get_user(screen_name='guildwars2')

        print(trends)
