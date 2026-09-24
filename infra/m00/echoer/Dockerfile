FROM alpine:3.20
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["sleep", "30"]
curl -sS -o /tmp/m00-nginx.html -w "HTTP %{http_code}\n" http://127.0.0.1:8888/