# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Journal::Application.config.secret_key_base = 'f0f298ab3e08a59627a41476138a77610b22e91d277fb7c9dcebfba441379dd0bbf0787d5e608d4e1967cffe18900b3ff52f213bcde3eb6355382a1169311865'
