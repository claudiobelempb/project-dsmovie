package br.com.surb.surb.shared.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.util.Arrays;

@Configuration
@EnableResourceServer
public class ControllerServerConfig extends ResourceServerConfigurerAdapter {

  private final Environment environment;
  private final JwtTokenStore tokenStore;

  public ControllerServerConfig(Environment environment, JwtTokenStore tokenStore){
    this.environment = environment;
    this.tokenStore = tokenStore;
  }

  private static final String[] PUBLIC = {
    "/oauth/token",
    "/h2-console/**",
    "/api/movies/**",
    "/api/scores/**"
  };

  private static final String[] OPERATOR_OR_ADMIN = {
    "/api/products/**",
    "/api/categories/**",

  };

  private static final String[] ADMIN = { "/api/users/**" };

  @Override
  public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
    resources.tokenStore(tokenStore);
  }

  @Override
  public void configure(HttpSecurity http) throws Exception {

    // H2
    if(Arrays.asList(environment.getActiveProfiles()).contains("test")){
      http.headers().frameOptions().disable();
    }

    http.authorizeRequests()
      .antMatchers(PUBLIC).permitAll()
      .antMatchers(HttpMethod.GET, OPERATOR_OR_ADMIN).permitAll()
      .antMatchers(OPERATOR_OR_ADMIN).hasAnyRole("OPERATOR", "ADMIN")
      .antMatchers(ADMIN).hasRole("ADMIN")
      .anyRequest().authenticated();
  }
}
