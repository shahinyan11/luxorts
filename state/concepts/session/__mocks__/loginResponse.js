export const loginSuccessResponse = {
  data: {
    data: {
      id: '76b72726-c605-4f3a-a47a-de827996601a',
      type: 'traveller_account',
      attributes: {
        email: 'evhenii.hryhoriev+1@rubygarage.org',
        public_id: 'Aq1W8XpB',
        verified_status: 'phone_verified',
        status: 'active',
      },
      relationships: {
        user_profile: {
          data: {
            id: '65714fcf-4292-4234-a02e-997941349d67',
            type: 'user_profile',
          },
        },
      },
    },
    meta: {
      csrf: 'zPwKN/6t6ark4Id1jpTEjy/gynZ0Yolgg931QtwEDefDa+nn5N9U6IeaQ53GGUiFSZVc32PaR1fiZfktuaplag==',
      access:
        'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDk5NDYzNDIsInVzZXJfaWQiOiI3NmI3MjcyNi1jNjA1LTRmM2EtYTQ3YS1kZTgyNzk5NjYwMWEiLCJ1aWQiOiIxNzUzM2UwMy1lZTRmLTRmN2ItYjFkNi1jZDQzZjE5ZmJkOTEifQ.E3AdjzoJWuRv66rQ9Xz95e_eOUgDZHTIJCEitqJhgdQ',
      access_expires_at: '2022-04-14T14:25:42.000+00:00',
      refresh:
        'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTA1NDc1NDIsInVzZXJfaWQiOiI3NmI3MjcyNi1jNjA1LTRmM2EtYTQ3YS1kZTgyNzk5NjYwMWEiLCJ1aWQiOiJmMzA5NWMyNC04NzkzLTRmZDgtYTk4Zi01N2I5ODI1MGY1MjUifQ.JgHL0vQZ_poHK4Y2H6_MV7oeo_7JFQWRWn_92jG41gE',
      refresh_expires_at: '2022-04-21T13:25:42.000+00:00',
    },
    included: [
      {
        id: '65714fcf-4292-4234-a02e-997941349d67',
        type: 'user_profile',
        attributes: {
          about: null,
          address: null,
          avatar_urls: {},
          date_of_birth: '1984-01-01',
          driving_license_first_name: null,
          driving_license_last_name: null,
          first_name: 'Evhenii',
          gender: null,
          last_name: 'Test',
          phone_number: '+11111111111',
        },
      },
    ],
  },
};

export const loginErrorResponse = {
  response: {
    data: {
      errors: [
        {
          detail: 'Wrong credentials',
          source: {
            pointer: '/data/attributes/base',
          },
        },
        {
          detail: 'Must be filled',
          source: {
            pointer: '/data/attributes/email',
          },
        },
        {
          detail: 'Must be filled',
          source: {
            pointer: '/data/attributes/password',
          },
        },
      ],
    },
  },
};
