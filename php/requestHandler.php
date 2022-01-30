<?php
    require('config.php');

    class RequestHandler {
        private function mysqliConnect() {
            $mysqli = new mysqli(SERVER_NAME, USER, PASS, DB);
            
            if (mysqli_connect_errno()) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }
            
            return $mysqli;
        }
        
        private function mysqliSelectFetchArray($sql, $value = '', $value2 = '', $value3 = '', $value4 = '', $value5 = '') {
            $mysqli = $this->mysqliConnect();
            $stmt = mysqli_stmt_init($mysqli);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                var_dump($sql);
                $this->locationIndex("?error=sqlerror");
            }
            else {
                if ($value == '' && $value2 == '' && $value3 == '' && $value4 == '' && $value5 == '') {
                }
                else if ($value2 == '' && $value3 == '' && $value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "s", $value);
                }
                else if ($value3 == '' && $value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "ss", $value, $value2);
                }
                else  if ($value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "sss", $value, $value2, $value3);
                }
                else  if ($value5 == '') {
                    mysqli_stmt_bind_param($stmt, "ssss", $value, $value2, $value3, $value4);
                }
                else {
                    mysqli_stmt_bind_param($stmt, "sssss", $value, $value2, $value3, $value4, $value5);
                }
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                if ($result) {
                    while($obj = mysqli_fetch_object($result)){
                        $data[] = $obj;
                    }
                }
                return $data;
            }
        }

        private function mysqliSelectFetchObject($sql, $value = '', $value2 = '', $value3 = '', $value4 = '', $value5 = '') {
            $mysqli = $this->mysqliConnect();
            $stmt = mysqli_stmt_init($mysqli);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                var_dump($sql);
                $this->locationIndex("?error=sqlerror");
            }
            else {
                if ($value == '' && $value2 == '' && $value3 == '' && $value4 == '' && $value5 == '') {
                }
                else if ($value2 == '' && $value3 == '' && $value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "s", $value);
                }
                else if ($value3 == '' && $value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "ss", $value, $value2);
                }
                else  if ($value4 == '' && $value5 == '') {
                    mysqli_stmt_bind_param($stmt, "sss", $value, $value2, $value3);
                }
                else  if ($value5 == '') {
                    mysqli_stmt_bind_param($stmt, "ssss", $value, $value2, $value3, $value4);
                }
                else {
                    mysqli_stmt_bind_param($stmt, "sssss", $value, $value2, $value3, $value4, $value5);
                }
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                if ($result) {
                    return mysqli_fetch_object($result);
                }
            }
        }
        //get userdata

        //get active groups (not hidden)

        //get task by groupid

    }