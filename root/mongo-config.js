use ${DB_NAME}
db.createUser({user: "${DB_USER}", pwd: "${DB_PASSWORD}", roles: ["readWrite"]})
db.grantRolesToUser("${DB_USER}",[{ role: "clusterMonitor", db: "admin" }])
