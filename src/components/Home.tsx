import { useState } from "react";
import styled from "styled-components";
import { faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import mail from "../assets/mail.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 300vh;
  left: 0;
  position: absolute;
  width: 100%;
  align-items: center;
  padding-top: 120px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  border-radius: 30px;
  width: 45%;
  height: 60px;
  position: relative;
  cursor: pointer;

  &:hover {
    border-color: #0077b6;
  }
  &:focus-within {
    border-color: #ff0000;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-left: 20px;
  background-color: transparent;
  color: white;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #8c8c8c;
`;

const Icon = styled(FontAwesomeIcon)``;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  gap: 1rem;
  margin-top: 2rem;
`;

const CompanyContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &.active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 20px #8b0000;
    border: solid #8b0000;
  }
`;

const CompanyName = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #333;
`;

const FounderName = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
  color: #666;
`;

const TextContainer = styled.div`
  width: 45%;
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
`;

const AICheckBtn = styled.button`
  width: 10%;
  height: 60px;
  background-color: transparent;
  border: solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;

  &:hover {
    background-color: #ffffff66;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 40%;
  }
`;

const TrendingNowContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 45%;
    height: 2px;
    background-color: #0000ff;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }
`;

const TrendingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 20px;
`;

const TrendingIcon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  color: #1e90ff;
`;

const TrendingHeading = styled.p`
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color: #fff;
`;

const TrendingCompanyBox = styled.div`
  display: flex;
  width: 45%;
  height: 50px;
  border: solid #fff;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 2rem;
`;

const TrendingCompanyDetails = styled.p`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  color: #fff;
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;

  @media (max-width: 700px) {
    display: grid;
    gap: 10px;
  }
`;

const SocmedLogo = styled.img`
  border-radius: 10px;
  width: 20px;
  height: 20px;
`;

const SocmedText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
`;

const SocmedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface GetTrendingCompaniesDataType {
  companies: TrendingCompaniesDataType[];
}

interface TrendingCompaniesDataType {
  companyName: string;
  founderName: string;
}

const Home = () => {
  const [searchCompany, setSearchCompany] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

  const CompanyData = [
    {
      id: 1,
      companyName: "Rouge International",
      founderName: "Desmond Marshall",
    },
    {
      id: 2,
      companyName: "FlexiWork Limited",
      founderName: "Ibrahim Ahmad",
    },
    {
      id: 3,
      companyName: "Tesla",
      founderName: "Elon Musk",
    },
    {
      id: 4,
      companyName: "Mercedes Benz",
      founderName: "Karl Benz",
    },
  ];

  const filteredCompanies =
    searchCompany.trim() !== ""
      ? CompanyData.filter((company) =>
          company.companyName
            .toLowerCase()
            .includes(searchCompany.toLowerCase())
        )
      : [];

  const toggleCompanySelection = (company: {
    id: number;
    companyName: string;
  }) => {
    if (selectedCompanies.includes(company.companyName)) {
      setSelectedCompanies(
        selectedCompanies.filter((m) => m !== company.companyName)
      );
    } else {
      setSelectedCompanies([...selectedCompanies, company.companyName]);
    }
  };

  const TrendingCompaniesData: GetTrendingCompaniesDataType = {
    companies: [
      {
        companyName: "ABC Company Limited",
        founderName: "John Chan",
      },
      {
        companyName: "Rouge International",
        founderName: "Desmond Marshall",
      },
      {
        companyName: "Rouge International",
        founderName: "Desmond Marshall",
      },
    ],
  };

  const TrendingCompanies = TrendingCompaniesData.companies.map((company) => (
    <TrendingCompanyBox key={company.companyName}>
      <TrendingCompanyDetails>
        {company.companyName}, {company.founderName}
      </TrendingCompanyDetails>
    </TrendingCompanyBox>
  ));
  return (
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Company Name"
          value={searchCompany}
          onChange={(e) => setSearchCompany(e.target.value)}
        />
        <SearchButton>
          <Icon icon={faSearch} />
        </SearchButton>
      </SearchContainer>
      <CompanyList>
        {filteredCompanies.map((company) => (
          <CompanyContainer
            key={company.id}
            onClick={() => toggleCompanySelection(company)}
            style={{
              backgroundColor: selectedCompanies.includes(company.companyName)
                ? "#f2f2f2"
                : "#fff",
              border: selectedCompanies.includes(company.companyName)
                ? "2px solid #8b0000"
                : "none",
            }}
          >
            <CompanyName>{company.companyName}</CompanyName>
            <FounderName>Founder: {company.founderName}</FounderName>
          </CompanyContainer>
        ))}
      </CompanyList>

      <TextContainer>
        The above fields are minimum requirement for an AI check. To improve
        accuracy, please expand Additional Options below for more fields.
      </TextContainer>

      <AICheckBtn>AI Check</AICheckBtn>
      <TrendingNowContainer>
        <TrendingTitle>
          <TrendingIcon icon={faArrowTrendUp} />
          <TrendingHeading>Trending Now</TrendingHeading>
        </TrendingTitle>
        {TrendingCompanies}
      </TrendingNowContainer>
      <SocialMediaContainer>
        <SocmedContainer>
          <SocmedLogo src={linkedin} />
          <SocmedText>Linkedin</SocmedText>
        </SocmedContainer>

        <SocmedContainer>
          <SocmedLogo src={facebook} />
          <SocmedText>Facebook</SocmedText>
        </SocmedContainer>

        <SocmedContainer>
          <SocmedLogo src={mail} />
          <SocmedText>Join Mailing List</SocmedText>
        </SocmedContainer>
      </SocialMediaContainer>
    </Container>
  );
};

export default Home;
