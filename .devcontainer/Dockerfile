#
# firebase-oskey-example
# Copyright (c) 2021-2023, OSkey SAS. MIT License.
#

FROM ghcr.io/gp-devenv/gp-firebase-devenv:22.04-18-1

# Switch back to root
USER root

# Set firebase-cli
COPY ./firebase-cli /usr/bin
RUN chmod ogu+x /usr/bin/firebase-cli

# Install java
# TODO: Remove when java 19 is set by default in gp-firebase-devenv
RUN apt-get update && \
    apt-get install -y -o DPkg::Options::=--force-confdef openjdk-19-jre-headless imagemagick && \
    apt-get autoclean -y && \
    apt-get autoremove -y

# Switch back to vscode user
USER vscode

# Set worksapce
WORKDIR /workspace

# Install nvm and set node to 18.15.0
# TODO: Remove when node > 18.15 support is added to firebase-tools and or moved
# to gp-node-devenv
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && \
    export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install v18.15.0

# Trust workspace
RUN git config --global --add safe.directory /workspace

# Expose ports
EXPOSE 80
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19003
EXPOSE 19004
EXPOSE 19005
EXPOSE 19006

ENTRYPOINT ["sudo", "/entrypoint.sh"]

# End
