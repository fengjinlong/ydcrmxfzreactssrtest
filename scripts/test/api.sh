cd ./tests/service
check_file=`ls | grep ".spec.ts" |  tr -s "\n"  " "`
jest --findRelatedTests $check_file