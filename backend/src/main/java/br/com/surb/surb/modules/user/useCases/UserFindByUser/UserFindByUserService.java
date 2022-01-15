package br.com.surb.surb.modules.user.useCases.UserFindByUser;

import br.com.surb.surb.modules.user.infra.jps.entities.User;
import br.com.surb.surb.modules.user.infra.jps.repositories.UserRepository;
import br.com.surb.surb.shared.constants.ExceptionConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserFindByUserService implements UserDetailsService {


  private static final Logger logger = LoggerFactory.getLogger(UserFindByUserService.class);
  private final UserRepository userRepository;

  public UserFindByUserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String usernameEmail) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(usernameEmail);

    if(user == null){
      logger.error(ExceptionConstants.USER_NOT_FOUND + usernameEmail);
      throw new UsernameNotFoundException(ExceptionConstants.EMAIL_NOT_FOUND + usernameEmail);
    }

    logger.info(ExceptionConstants.USER_FOUND + usernameEmail);
    return user;
  }
}
