FROM python:3.9-alpine

# pipを最新バージョンにアップグレード
RUN pip install --upgrade pip

# awscliをインストール
RUN pip install awscli --upgrade

# 必要なファイルをコピー
COPY create-dynamodb-tables.sh .
COPY ftgo-order-history.json .
COPY wait-for-dynamodblocal.sh .

# スクリプトに実行権限を付与
RUN chmod +x *.sh

# ヘルスチェックを設定
HEALTHCHECK --interval=10s --retries=10 --timeout=3s CMD [[ -f /tables-created ]]

# 起動コマンド
CMD ./wait-for-dynamodblocal.sh && ./create-dynamodb-tables.sh
