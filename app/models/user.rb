class User < ApplicationRecord
    has_secure_password

    validates :username, 
        length: { in: 3..16 }, 
        uniqueness: true

    validates :email, 
        length: { in: 10..24}, 
        uniqueness: true

    validates :session_token, presence: true, uniqueness: true
    validates :password, allow_nil: true, length: { in: 10..24 }


    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password)
        field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
        user = User.find_by(field => credential)
        user&.authenticate(password)
    end

    def reset_session_token
        self.update!(session_token: generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    private

    def generate_session_token
        loop do
            token = SecureRandom::urlsafe_base64(16)
            return token unless User.exists?(session_token: token)
        end
    end
end
