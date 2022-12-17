import { Button } from "react-bootstrap";
import useWeb3 from "../hooks/useWeb3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const ConnectWalletButton = () => {
  const { isConnected, connectWallet } = useWeb3();

  return (
    <Button disabled={isConnected} variant="light" onClick={connectWallet}>
      <FontAwesomeIcon  icon={faCircle} color= {isConnected? "green":"red"}/> Connect
    </Button>
  );
};

export default ConnectWalletButton;
