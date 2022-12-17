import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import useERC20 from "../hooks/useERC20";
import { useEffect, useState } from "react";
import useWeb3 from "../hooks/useWeb3";
import { TokenAddresses } from "../tokenConfig";

const TokenDetail = () => {
  const { chainId } = useWeb3();
  const { getTokenName, getTotalSupply } = useERC20();
  const [tokenName, setTokenName] = useState<string>();
  const [totalSupply, setTotalSupply] = useState<number>();
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onGetTotalSupplyHandler = async () => {
    setTotalSupply(await getTotalSupply(TokenAddresses[chainId].address));
  };

  useEffect(() => {
    getTokenName(TokenAddresses[chainId]?.address)
      .then((tokenName: string) => {
        setTokenName(tokenName);
      })
      .catch((err: Error) => {
        setTokenName(undefined);
        setTotalSupply(undefined);
        setIsError(true);
        setErrorMessage("Something went wrong!");
      });
  }, [chainId]);

  const getTokenCard = () => {
    return (
      <Card>
        <Card.Header>Token Details</Card.Header>
        <Card.Body>
          <Card.Title>{tokenName}</Card.Title>
          {totalSupply ? (
            <Card.Subtitle className="mb-2 text-muted">
              Total Supply (wei) : {totalSupply}
            </Card.Subtitle>
          ) : (
            <Button variant="primary" onClick={onGetTotalSupplyHandler}>
              Get Total Supply
            </Button>
          )}
        </Card.Body>
      </Card>
    );
  };

  return (
    <>
      {tokenName ? getTokenCard() : <Card> No Data Found!</Card>}
    </>
  );
};

export default TokenDetail;
